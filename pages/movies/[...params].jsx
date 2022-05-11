import { useRouter } from "next/router";
import React from "react";
import HeadName from "../../components/HeadName";

const Detail = ({ params }) => {
  const router = useRouter();
  const [title, id] = params || [];
  return (
    <div>
      <HeadName title={title} />
      <h4>{title}</h4>
    </div>
  );
};

export const getServerSideProps = ({ params: { params } }) => {
  return {
    props: {
      params,
    },
  };
};

export default Detail;
