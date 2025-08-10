"use client";

import { supabase } from "@/instegrations/supabase";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";

export default function UploadWallpper({ sellerId, nameFunction }: { sellerId: string, nameFunction: string }) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (!e.target.files) return;
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile)); // para previsualizar
  };

  const uploadWallpperImage = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!file) {
      enqueueSnackbar("Selecciona una imagen primero", { variant: "error" });
      return;
    }else if (!sellerId) {
      enqueueSnackbar("Selecciona un vendedor primero", { variant: "error" });
      return;
    }else {
      setIsUploading(true);

      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        enqueueSnackbar("No estás autenticado", { variant: "error" });
        return;
      }

      const formData = new FormData();
      formData.append("file", file);
      formData.append("sellerId", sellerId);
  
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/${nameFunction}`,
         {
          method: "POST",
          headers: {
            Authorization: `Bearer ${session.access_token}`,
          },
          body: formData,
        }
        );
        console.log('res',res)
        const data = await res.json();
  
        if (!res.ok) throw new Error(data.error || "Error al subir imagen");
  
        console.log("✅ Imagen subida:", data);
        enqueueSnackbar(`Imagen subida con éxito: ${data.publicUrl}`, { variant: "success" });
      } catch (error: any) {
        console.error(error);
        enqueueSnackbar("❌ " + error.message, { variant: "error" });
      } finally {
        setIsUploading(false);
      }
    }

    
  };

  return (
    <div className="p-4 border rounded-lg w-full">
      <h2 className="text-lg font-semibold mb-2">Subir Imagen </h2>

      <input type="file" className="w-full p-2 rounded" accept="image/*" onChange={handleFileChange} />

      {preview && (
        <div className="mt-4 w-full bg-gray-50 p-2 rounded">
          <p className="text-sm text-gray-500">Vista previa:</p>
          <img src={preview} alt="Preview" className="max-w-sm mt-2 rounded" />
        </div>
      )}

      <button
        onClick={uploadWallpperImage}
        disabled={isUploading}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {isUploading ? "Subiendo..." : "Subir Imagen"}
      </button>
    </div>
  );
}