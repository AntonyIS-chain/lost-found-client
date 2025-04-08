import Dashboard from "@/app/components/layout/Dashboard";
import Layout from "../Layout";
import SignUpForm from "@/app/components/forms/SignUpForm";

export default function Page() {
  return (
   <Dashboard>
      <Layout>
        <SignUpForm />
      </Layout>
   </Dashboard>
  );
}
