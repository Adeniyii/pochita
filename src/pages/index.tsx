import { trpc } from "../utils/trpc";
import { IconPhoto } from "@tabler/icons";
import Wrapper from "../layouts/Wrapper";
import { useSession } from "next-auth/react";

const Home = () => {
  const sesh = useSession()
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  if (!sesh) {
    return <div>You are not authenticated</div>;
  }

  return (
    <Wrapper>
      <h1>Hello world</h1>
      <p>{hello.data?.greeting}</p>
      <IconPhoto size={50} strokeWidth={1} />
    </Wrapper>
  );
};

export default Home;
