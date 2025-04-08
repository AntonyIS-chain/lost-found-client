import Dashboard from "@/app/components/layout/Dashboard";
import Layout from "../Layout";
import SignInForm from "@/app/components/forms/SignInForm";

export default function Page() {
  return (
   <Dashboard>
      <Layout>
        <SignInForm />
      </Layout>
   </Dashboard>
  );
}
