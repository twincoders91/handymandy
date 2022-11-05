import React from "react";
import CharacterSelect from "./CharacterSelect";
import CreateAccount1 from "./CreateAccount/CreateAccount1";
import CreateAccount2Handyman from "./CreateAccount/CreateAccount2Handyman";
import CreateAccount2User from "./CreateAccount/CreateAccount2User";

const CreateAccountMain = ({
  charSelect,
  setCharSelect,
  usercredentialscreated,
  setUsercredentialscreated,
  setUsername,
}) => {
  return (
    <div className="create--account--container">
      {charSelect === "" && (
        <CreateAccount1
          setUsercredentialscreated={setUsercredentialscreated}
          setCharSelect={setCharSelect}
          setUsername={setUsername}
        />
      )}
      {charSelect === "step1" && (
        <CharacterSelect setCharSelect={setCharSelect} />
      )}
      {charSelect === "user" && usercredentialscreated && (
        <CreateAccount2User />
      )}
      {charSelect === "handyman" && usercredentialscreated && (
        <CreateAccount2Handyman />
      )}
    </div>
  );
};

export default CreateAccountMain;
