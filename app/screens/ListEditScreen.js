import React from "react";
import { StyleSheet } from "react-native";
import { Formik } from "formik"; //formik is wrapped in braces because it is not a default export it is  a named eport
import * as Yup from "yup";
import * as Location from "expo-location";

import AppFormField from "../components/AppFormField";
import AppPicker from "../components/AppPicker";
import Screen from "../components/Screen";
import SubmitButton from "../components/SubmitButton";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function ListEditScreen(props) {
  return (
    <Screen style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {() => (
          <>
            <AppFormField
              autoCorrect={false}
              name="title"
              placeholder="Title"
            />
            <AppFormField
              keyboardType="numeric"
              name="Price"
              placeholder="Price"
            />
            <AppPicker name="category" placeholder="Category" />
            <AppFormField name="Description" placeholder="Description" />

            <SubmitButton title="Post" />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default ListEditScreen;
