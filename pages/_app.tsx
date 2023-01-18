import "../styles/globals.css";
import axios from "axios";
import AxiosInstanceProvider from "../src/contexts/AxiosInstanceProvider";
import axiosInterceptors from "../src/interceptors/axiosInterceptors";
import AuthProvider from "../src/contexts/AuthProvider";
import LayoutHorizontal from "../src/components/layouts/LayoutHorizontal";
import { useRouter } from "next/router";
import { useState } from "react";

function MyApp({ Component, pageProps }: any) {
  const [company, setCompany] = useState(null);
  const router = useRouter();
  const { company_id } = router.query;
  const getCompany = async (company_id) => {
    let company: any = null;
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      company = await axios.get(API_URL + `/cia-guard/${company_id}`);
      if (!company?.data?.data) router.push("/");
      company = company?.data?.data;
    } catch (e) {
      company = null;
      router.push("/");
    }
    setCompany(company);
    return company;
  };

  if (company_id) {
    if (!company) {
      localStorage.setItem("company", "");
      getCompany(company_id);
      return <div>Cargando...</div>;
    }
    localStorage.setItem("company", JSON.stringify(company));
    return (
      <AxiosInstanceProvider interceptors={axiosInterceptors}>
        <AuthProvider auth={Component.auth} guard={company}>
          <LayoutHorizontal>
            <Component {...pageProps} company={company} />
          </LayoutHorizontal>
        </AuthProvider>
      </AxiosInstanceProvider>
    );
  }
  return <Component {...pageProps} />;
}

export default MyApp;
