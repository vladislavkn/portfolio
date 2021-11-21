import { GetServerSideProps } from "next";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

type UserPageProps = {
  username: string;
};

const UserPage: React.FC<UserPageProps> = ({ username }) => (
  <>
    <Header username={username} />
    <Navigation />
  </>
);

export const getServerSideProps: GetServerSideProps<UserPageProps> = async (
  ctx
) => ({
  props: { username: (ctx.query.username as string) ?? "none" },
});

export default UserPage;
