import React from "react";
import CharacterSelect from "./CharacterSelect";
import CreateAccount1 from "./CreateAccount/CreateAccount1";
import CreateAccount2Handyman from "./CreateAccount/CreateAccount2Handyman";
import CreateAccount2User from "./CreateAccount/CreateAccount2User";

const CreateAccountMain = () => {
  return (
    <div className="create--account--container">
      {/* <CharacterSelect /> */}
      {/* <CreateAccount1 /> */}
      {/* <CreateAccount2User /> */}
      <CreateAccount2Handyman />
    </div>
  );
};

export default CreateAccountMain;
