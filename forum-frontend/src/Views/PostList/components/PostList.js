import styled from "styled-components";
import Header from "./Header";
import Posts from "./Posts";

const StyledPostLists = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`;

const Tem = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
`;

const PostList = () => {
  return (
    <div>
      <StyledPostLists>
        <Header />
      </StyledPostLists>
      <Tem>
        <Posts />
      </Tem>
    </div>
  );
};

export default PostList;
