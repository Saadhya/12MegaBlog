import { useState } from "react";
import UserContext from "../../context/UserContext";
import User from "./User";

// useContext is to maintain global state.
export const UsersDashboard = () => {
  const [user, setUser] = useState("Radhe");
  // passing object and function both to context api
  const users = { name: user, updateName: setUser };

  return (
    <UserContext.Provider value={users}>
      <h2>UsersDashboard</h2>
      <User />

      {/* we can also specify the another provider inside once context-provider, that's because component will search for 
      immediate provider- so overriding the provider */}
      {/* supppose we have his provider */}
      {/* <CustomerContext>
        <Customer></Customer>
      </CustomerContext> */}

    </UserContext.Provider>
  );
};

// uses of context api- based on provider and consumer architecture
// theming - pass down app theme
// lang - pass down lang or any config data
// authentication- pass down current authenticated user
// to avoid prop-drilling

// cons
// Re-render: all the components using this context, will re-render on updating state, 
// (so keep your context separate for different uses)
// even after separating re-redering will be there, so we have to combine other hooks like usememo() usecallback() to control rerendering


// steps to follow:
// create a context and export- using createContext() func (Ex- usercontext file)
// create a provider and pass the value- add value attribute
// usecontext hook to implement consumer

export default UsersDashboard;
