import { useMutation, useQuery } from "@tanstack/react-query"
import { IProduct } from "../utils/interfaces";
import { useNavigate } from "react-router-dom";
import { supabase } from "../assets/database";
import { v4 as uuid } from "uuid";
import { ChangeEvent } from "react";
import toast from "react-hot-toast";

//--------------------------------- GET ---------------------------------
export const useProducts = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data, error } = await supabase.from('products').select();
      if (error) throw new Error(error.message);
      return data;
    },
  })
  return { products, isLoading }
}
export const usePaginateProducts = (page: number, limit: number) => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products", page],
    queryFn: async () => {
      const { data, error } = await supabase.from('products').select().range((page - 1) * limit, page * limit - 1);
      if (error) throw new Error(error.message);
      return data;
    },
  })
  return { products, isEmpty: products?.length === 0,  isLoading }
}
export const useGetProduct = (id: string): { product: IProduct, isLoading: boolean } => {
  const { data: product, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => supabase.from('products').select().eq('id', id).single().then(({ data }) => data)
  })
  return { product, isLoading }
}
export const useGetCategory = (category: string) => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products", category],
    queryFn: async () => {
      const { data, error } = await supabase.from('products').select().eq('category', category)
      if (error) throw new Error("Error fetching products")
      return data;
    }
  })
  return { products, isLoading, isEmpty: products?.length === 0 }
}
export const useGetProductsQuery = (query: string): { products?: IProduct[], isEmpty: boolean, isLoading: boolean } => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products", query],
    queryFn: async ():Promise<IProduct[]> => {
      const { data, error } = await supabase.from('products').select().ilike('title', `${query}%`)
      console.log(data)
      if (error) throw new Error("Error fetching products")
      return data;
    }
  })
  return { products, isLoading, isEmpty: products?.length === 0 }
}
//--------------------------------- ADD ---------------------------------
export const useAddProduct = () => {
  const router = useNavigate();
  const { mutate: addProduct, isPending: isAdding } = useMutation({
    mutationFn: async (product: IProduct) => await supabase.from('products').insert(product),
    onSuccess: () => {
      toast.success('Producto añadido')
      router('/admin/products')
    }
  })
  return { addProduct, isAdding }
}
//--------------------------------- UPDATE ---------------------------------
export const useUpdateProduct = () => {
  const router = useNavigate();
  const { mutate: updateProduct, isPending: isUpdating } = useMutation({
    mutationFn: async (product: IProduct) => await supabase.from('products').update(product).eq('id', product.id),
    onSuccess: () => {
      toast.success('Producto actualizado')
      router('/admin/products')
    }
  })
  return { updateProduct, isUpdating }
}
//--------------------------------- DELETE ---------------------------------
export const useDeleteProduct = () => {
  const router = useNavigate();
  const { mutate: deleteProduct, isPending: isDeleting } = useMutation({
    mutationFn: async (id: string) => await supabase.from('products').delete().eq('id', id),
    onSuccess: () => {
      toast.success('Producto eliminado')
      router('/admin/products')
    }
  })
  return { deleteProduct, isDeleting }
}
export const uploadFile = async (e: ChangeEvent<HTMLInputElement>) => {
  const [file] = e.target.files!;
  const promise = supabase.storage.from('products').upload(uuid(), file, { cacheControl: '3600', upsert: false }).then(({ data }) => {
    const URL = import.meta.env.VITE_SUPABASE_URL_FILE;
    return URL + data?.fullPath;
  });
  toast.promise(promise, {
    loading: 'Subiendo imagen',
    success: 'Imagen subida',
    error: 'No se pudo subir la imagen',
  });
  return promise;
}

export const deleteFile = async (img: string) => {
  console.log({ img })
  const fileName = 'products/' + img.split('/').at(-1);
  const { data, error } = await supabase.storage.from('products').remove([fileName])
  console.log({ fileName })
  console.log({ data });
  console.log({ error });
}