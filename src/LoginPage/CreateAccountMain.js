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
  setPreviousPage,
  setAccountCreated,
}) => {
  return (
    <div className="create--account--container">
      {charSelect === "" && (
        <CreateAccount1
          setUsercredentialscreated={setUsercredentialscreated}
          setCharSelect={setCharSelect}
          setUsername={setUsername}
          setPreviousPage={setPreviousPage}
        />
      )}
      {charSelect === "step1" && usercredentialscreated && (
        <CharacterSelect setCharSelect={setCharSelect} />
      )}
      {charSelect === "user" && usercredentialscreated && (
        <CreateAccount2User
          setCharSelect={setCharSelect}
          setAccountCreated={setAccountCreated}
        />
      )}
      {charSelect === "handyman" && usercredentialscreated && (
        <CreateAccount2Handyman
          setCharSelect={setCharSelect}
          setAccountCreated={setAccountCreated}
        />
      )}
    </div>
  );
};

export default CreateAccountMain;
