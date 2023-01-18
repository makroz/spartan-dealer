import "../styles/globals.css";
import axios from "axios";
import AxiosInstanceProvider from "../src/contexts/AxiosInstanceProvider";
import axiosInterceptors from "../src/interceptors/axiosInterceptors";
import AuthProvider from "../src/contexts/AuthProvider";
import LayoutHorizontal from "../src/components/layouts/LayoutHorizontal";
import { useRouter } from "next/router";
import { useState } from "react";
import config from "../config/config";

function MyApp({ Component, pageProps }: any) {
  const [slug, setSlug] = useState(null);
  const router = useRouter();
  const { slug_id } = router.query;
  const getSlug = async (slug_id) => {
    let slug: any = null;
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      slug = await axios.get(API_URL + config?.app.slugGuard + "/" + slug_id);
      if (!slug?.data?.data) router.push("/");
      slug = slug?.data?.data;
    } catch (e) {
      slug = null;
      router.push("/");
    }
    setSlug(slug);
    return slug;
  };

  if (slug_id) {
    if (!slug) {
      localStorage.setItem("slug", "");
      getSlug(slug_id);
      return <div>Cargando...</div>;
    }
    localStorage.setItem("slug", JSON.stringify(slug));
    return (
      <AxiosInstanceProvider interceptors={axiosInterceptors}>
        <AuthProvider auth={Component.auth} guard={slug}>
          <LayoutHorizontal>
            <Component {...pageProps} slug={slug} />
          </LayoutHorizontal>
        </AuthProvider>
      </AxiosInstanceProvider>
    );
  }
  return <Component {...pageProps} />;
}

export default MyApp;
