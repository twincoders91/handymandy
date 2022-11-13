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
  username,
  setUsername,
  setPreviousPage,
  setAccountCreated,
  setUser_id,
}) => {
  return (
    <div className="create--account--container">
      {charSelect === "" && (
        <CreateAccount1
          charSelect={charSelect}
          setUsercredentialscreated={setUsercredentialscreated}
          setCharSelect={setCharSelect}
          username={username}
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
          username={username}
          setUser_id={setUser_id}
        />
      )}
      {charSelect === "handyman" && usercredentialscreated && (
        <CreateAccount2Handyman
          setCharSelect={setCharSelect}
          setAccountCreated={setAccountCreated}
          username={username}
          setUser_id={setUser_id}
        />
      )}
    </div>
  );
};

export default CreateAccountMain;
