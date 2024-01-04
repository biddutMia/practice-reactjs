import { Box } from "@mui/material";

const App = () => {
  return (
    <div>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima culpa,
        aliquam numquam, repudiandae unde dignissimos blanditiis ipsa fuga
        dolorum maiores officia provident. Voluptatem numquam maiores
        exercitationem modi provident accusamus, consequatur quidem hic ut
        aliquam. Reprehenderit molestiae saepe accusantium nostrum tempore,
        repellat atque eaque eos est illo, dolores voluptates distinctio sunt
        explicabo, exercitationem hic maxime totam aperiam asperiores laboriosam
        aut aliquid labore soluta. Aspernatur fugit eos voluptas beatae modi cum
        id nesciunt vero possimus saepe tempore, quos velit pariatur reiciendis
        eius distinctio obcaecati. Excepturi quisquam consequuntur architecto,
        soluta illo quibusdam ratione corrupti nulla nesciunt. Iure saepe odit
        nulla repellat soluta ullam?
      </div>
      <Box sx={{ position: "relative" }}>
        <Box sx={{ background: "blue" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
          deleniti distinctio dicta, quod nobis sed repudiandae dolorum commodi
          voluptates suscipit eos vel cum vero illo. Molestiae fugit explicabo
          nemo sunt velit magni asperiores omnis atque recusandae? Neque
          aspernatur recusandae sint debitis impedit itaque, vitae veniam, eaque
          accusamus ratione reiciendis voluptate.
        </Box>
        <Box sx={{ background: "red", position: "absolute", top: "10px" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
          deleniti distinctio dicta, quod nobis sed repudiandae dolorum commodi
          voluptates suscipit eos vel cum vero illo. Molestiae fugit explicabo
          nemo sunt velit magni asperiores omnis atque recusandae? Neque
          aspernatur recusandae sint debitis impedit itaque, vitae veniam, eaque
          accusamus ratione reiciendis voluptate.
        </Box>
      </Box>
    </div>
  );
};

export default App;
