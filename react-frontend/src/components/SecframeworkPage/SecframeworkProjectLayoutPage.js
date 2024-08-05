import React from "react";
import ProjectLayout from "../Layouts/ProjectLayout";
import { connect } from "react-redux";
import SecframeworkPage from "./SecframeworkPage";

const SecframeworkProjectLayoutPage = (props) => {
  return (
    <ProjectLayout>
      <SecframeworkPage />
    </ProjectLayout>
  );
};

const mapState = (state) => {
  const { user, isLoggedIn } = state.auth;
  return { user, isLoggedIn };
};

const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(SecframeworkProjectLayoutPage);