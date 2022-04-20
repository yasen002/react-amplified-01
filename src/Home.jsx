import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";

export default function Home() {
  const [studentData, setStudentData] = useState(null);
  //if not authenticated, render option to login.
  //if authenticated show option of dashboard.

  useEffect(() => {
    setAuth();
    async function setAuth() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        const { attributes } = user;
        // const { email } = attributes;
        console.log("user: ", Object.keys(user));
      } catch (error) {
        console.log(error);
      }
    }
  }, [studentData]);

  return (
    <div>
      <Link to="dashboard">Dashboard</Link>
    </div>
  );
}

// const { attributes } = user;
// const { email } = attributes;

// const studentData = await DataStore.query(Student, (student) =>
//   student.email("eq", email)
// );
// var inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);
// Cookies.set("student", JSON.stringify(studentData), {
//   expires: inFifteenMinutes,
// });

// if (studentData.length === 0) {
//   router.push("/ags/signup");
// } else {
//   router.push("student/dashboard");
// }

// setStudent(studentData);
// //---------------------------------------
// ////this is not checking student email
// // if (!isStudentMail(email)) {
// //   router.replace("/unauthorizedemail");
// //   return;
// // } else {
// // }
// //---------------------------------------

// {
//   "username": "google_104142427804075574374",
//   "pool": {
//       "userPoolId": "us-east-1_EKSqdiVrc",
//       "clientId": "7uh8lb2idnder3jkjte0kqub4g",
//       "client": {
//           "endpoint": "https://cognito-idp.us-east-1.amazonaws.com/",
//           "fetchOptions": {}
//       },
//       "advancedSecurityDataCollectionFlag": true,
//       "storage": {
//           "CognitoIdentityServiceProvider.7uh8lb2idnder3jkjte0kqub4g.google_104142427804075574374.refreshToken": "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.NU1CJNUoWWrLLLbYubs20P_ZXXsTgtdL8edkOd9UVJk1MVSeS8aCifoDzPSfFCwFCfH7N-wvkvDWLp5WGJ9BRISPeEmrTcXgDcXo71Z_pQs5UnkabiPhoL3_0xFILQIAmiL4yEeC5h4mtYcPoIEjFM77Ll10v6U3FDinzdTs54enTyq86IyMJCCo4f2YyOBvj7gsZ4N7SBlMVa2b-1Fdn77epbhEn8eEl5Xoi4GKB37rA_73HQd3Jn18mVglWRmUO2tnWkcR4faVh2NLX9ccBdQ7tgYg65Umw0lKQZ2DPlJzvjBDITGU7i_Q0K-SAhfUSMUu_f3pAM1_WTAExZOViQ.RayYyMsIDrg2Xjyu.wXJbGvIXVhH6ltdQID2JJY-KLqv_vBZhysZVjS3FfyixuFqBDxLc7utuqYvo5yF_pbJmXKfWPYY3zny1Gqsr3Klioc_KeRTOigcNaQ6cwowixX_C3LthHPfXP73rlyhirexBezBHvFMKEDE0VO04z8X4-BGYjdyHbStxXZcrpQnc_nRQMUQE5t4hIYSOFynmFt7HtvyZPCBxUhshraRP9Km_yds45ltas6aHDEhgJaRB1Vz9enm8j8oZ-642-b9NLD_yzfQAOTmusS6By9mPEHZUnpO68SbE82gdEfGBPAY6Y0rlVpcdhTXioRRvGVyJob-2dLHM3jC3QHQrFXudCGtFK2YfPWfsDNE5uxZSb2CyXMr5SVL6tWqI8bQxASUWTkn5gGySBh9xL1GW3_z54A3imZ1l9d7yRDMHlfdHl805S7FOnqlYM5OSatb-_C7EZajcNbJ7WR56_JZ5PFnoGhVXYRkY_w0tJvL8-0L4rpk9OiiDfNnB0WWvWF2xAm0CbtRzae_pGINE8euuXLy1dtJ86jp-B93Z1kwhoA87wZQ43Y9lVFNJHnoH8L3-10erYRsHgHWkV_2vB-EaKNu_MEPPu6OwEdos2Y3ZRaxywi67Km_L80LW3mIz2JvFDR_XjJXniFoRKklRBA0WakUlbCaNQ4jIudBwAcW1IpU3KzZYaiYxK6XXbISJewxMVrHNctLsv4mwil9H2LuDGe_GIyD0o5iiZ0_PBymG4AfQ9VtfeiR7sUatgpwRvcZyTLyPTRYhSRAoK0VMwzn0gid8pJeeNoRGst_xdedpd2Uwyx7p-AZ4E-moaiYxkltNT7tPdlf4n9oyKmjS3kRTdiK6RZwDeTKtzkFxiChmH7D2De28vfmFLvjm8kjbakbcgkiWx2UnekgdQYv8LoqRSHeIVKbu3pEhG-BMwEOj4y1DlMZMqIl2sO5HTBw13wm9_W0cY4pBq1fhFQdGHDnDQsbizHKPbyMqzKRE3igAWcMPSXpuoj5MKMOrqGE4vTYAzIqUPDDR4J3SIfIgMdVB5Ry62HjAq_DXWT5OWhyNnVA8GC7ibg34OyUZ4vvmmmSxM8uI3aBmvnoagFXNKkq5gv0nQG_tGETj8g2b5QmsRg740V0heNlrYkwTvGVBGhD0ZGOPndNkTACAV0qxCvOYKq6yeF1fmx8UDOyqTxhlxIri2Bjly5FMZXSgfjHZkI2PISglevGoXB6WlNw-BiMVcdB8uovxjGB1lrdGdAbHNiRyis5aBJdk9QsqZxMLLhsc7dVS_ypfHkPpJVMD2C6VFU7YsTxnTQ.Wq2VubbZB2-FhJiC3CRX7g",
//           "amplify-redirected-from-hosted-ui": "true",
//           "CognitoIdentityServiceProvider.46msp7htgnn0s6gc5rg4kjlss5.google_104142427804075574374.refreshToken": "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.SPctAHfW81D021GrrSxNFWCn6NWJPdHudpstvbo70_DHTtmvUjM1oBdq4qeYVjstyEyG20mV7pAyyhlX3ZhWLt4jUMNyUgoue0hSqFbr0ZTDgIdRVOoeVbyNVIecyt9jL3KQQiIf6Gh6nuewX8bYBZkRXorY_OeFvO14GMq7fE4yDHhbjxxgm3iGU0THlWDAnIUZ20W-rCFJ-pXL8-YejG1oaDnBhKF4EoWGB-LyjdZXewhJMncsQtOwvRHhdGcxbceNIq0VDIRcZlE8PpO_5K1VfHBh7zoqhhSE2j7llAsMJglJOHy5_wSYnRnJSzAckP76d4ZkY7MlrZdwhO9Bqw.nl40ETfzhVGDBvQN.KSlGTmfkOKK-JJtWq4HyEk3l4QiOCl5UCHgj-VD8Hbt91UGIa-krztGof2LOTyQtoAKxkIsgUNYujehjJs9EXIfstyVlyBSDisyJ3kadEGjQPNT5InYwpANSr3oc7cgdiKu64eSVDEUvpAowcoC6CgOTndreOD_p3veulMLq8IU-7e4d2xxRiZCREG8gluroP4r0okU3mClr5aMcJ88P8hhcKblWDZa0X5IZYgFVRW55v7Ilas0fAI_jZ7mOv0blQnDcpvASbypt0YG6fhiJDmkobJaYwixDNKQKdC8PJicQlj1Ty8gmpIGrDgF7Cg9CY_CXGH0csyYJW6KW1-CJiOjY2AHgVfHzX_-0h-iWmulGPvaRwZkit-0z9BR92sMp_hYiBGApnkzfSW6GK6oH08AMkf0Zf4dYaVZQYouT_w7KBY78h3jOXfiPabF5lf_c2XH48WF6IhJrKPq-q4XfS1G4ufZFMGSWtuHhdHCGrmCeDm7JzT2ohQkl5CuRhhLeAUvNwdF92Rf3aYDggmSpr1qRuQ8d2IXjZ4Tn0nYVEumqK7KafR1_CIK8c1WJvEuP74YBEIbC1-CsV6PGxVFusYVRIhyK-BusjPmsttNpvbeYZBKxOfxcPVqDsd5sYI_cIzUFA6p2lgTThfh2Hbk06O4PlWSmHzVFjVAVFdjhofJYCUSYz2GbDS6BG1nDGjcIUZkN_mEG40cWkeVLTyTbzRCo16iuWFKvnUCJdnx4GURhk2rPZMjO8RvHnLR4gSQMzQZpKeNOYTBoyrXrYxXZUfQpWCEReGRyPfUFH3jpcY_BTRvzaCzLvl_PjSHOf9FbebJF0GbKjgwRUANoFcp2EQpONaMti6YmA_zB7yOw_BwBHTPto1bRzct1e83RG-aNu1DqFPXE9iX2qlTa0y7UU9Z52nqrMgiIbbbwSjWvOxZ3VsU2Q7Siw2JPHnNw5KPoRIz69KLbR24nUi-0cR1BpeCHDdoNcvuQARfWN6EI6kEG_oMhFO2-tXHZ3fMU1N65vzLqudC9lIfOIfMiaIxqPH67JS_KhecoplsCeF2EGcXTsAAQSEnMGlILCyFUBKep3yqODdOn40Jt69AwB002pzQza9MxAltKX-UuldZz5YgpYWWY8_i57rfSqzSL-B5ILaS7HP5FIIx666a4TG5iocD15U-lowsSqtdo5wuwk18AGjACihHn6zV78LQWMJHYol6AwGccyjtnn2g-sJz0qsJORTM2KyQBBH18fjrN-8yNNKo-kiR_-Kbq_U4Jqo4JW5knJeUs9lGkhY5AB4Gdxi9e7g._pckxTY3eUih49j-WmtGJQ",
//           "amplify-signin-with-hostedUI": "true",
//           "CognitoIdentityServiceProvider.46msp7htgnn0s6gc5rg4kjlss5.google_104142427804075574374.idToken": "eyJraWQiOiJ2XC9jaDNsTmV3MytZVmZORnZmXC9qT3JNMmE1RnhUM1I2RnYrUUE2dU1Ccnc9IiwiYWxnIjoiUlMyNTYifQ.eyJhdF9oYXNoIjoiUXJ1NlQ5bGxtZGttWFZYMUJhZnV0dyIsInN1YiI6IjViNGNiMjAyLTYyYzItNDQyMC1hMzUzLTYwZjc4ZTJmZDRiMSIsImNvZ25pdG86Z3JvdXBzIjpbInVzLWVhc3QtMV9WREdJdGgySHBfR29vZ2xlIl0sImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfVkRHSXRoMkhwIiwiY29nbml0bzp1c2VybmFtZSI6Imdvb2dsZV8xMDQxNDI0Mjc4MDQwNzU1NzQzNzQiLCJvcmlnaW5fanRpIjoiYTQxZjVlNjgtMjRkYy00MDkyLWI2NzQtMjkxMTNiY2YzNTYxIiwiYXVkIjoiNDZtc3A3aHRnbm4wczZnYzVyZzRramxzczUiLCJpZGVudGl0aWVzIjpbeyJ1c2VySWQiOiIxMDQxNDI0Mjc4MDQwNzU1NzQzNzQiLCJwcm92aWRlck5hbWUiOiJHb29nbGUiLCJwcm92aWRlclR5cGUiOiJHb29nbGUiLCJpc3N1ZXIiOm51bGwsInByaW1hcnkiOiJ0cnVlIiwiZGF0ZUNyZWF0ZWQiOiIxNjQ5MzQzMTgxOTM4In1dLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTY1MDM0ODQ4OSwiZXhwIjoxNjUwMzUyMDg5LCJpYXQiOjE2NTAzNDg0ODksImp0aSI6IjZmN2YxOWNiLTgzYjQtNDY2Yi05ZWMzLTNjZWI4MDA1ODE0MyIsImVtYWlsIjoieWFzZW5fYWJ1ZGlrZXJhbm11QHN0dWRlbnQuc21jLmVkdSJ9.LKKgmsfwctuB34FRpDsY4TS3V5W93pNo1A3TBpLTLYdgILsciR3FylBFAED6PbQsJ_CWTowJUMQpCgPNVdFzzAzJl0_jAOp3z5HywswLAcTu8vNDLIG-jQqW7pYVau3sOwVgWUrtBVezJ2ULZQJ5c8nptvSvnsWnXmf-hHnDSmcUSr_a_UXJAnX6VmqFZ60mff_4fvqyly2UGolZbzw1v7BhP6kaosOi4rpXzSKO4AsplWSPO86vwYmkqW_52VL6tNZ90F6sya4kk14r6O5vSOlOewGw0prff7OlNnd7aQvVbWNmzUylIYSmhqwmPDzO1Fxc-UhJoMs4EP4lnp0YWg",
//           "CognitoIdentityServiceProvider.46msp7htgnn0s6gc5rg4kjlss5.google_104142427804075574374.userData": "{\"UserAttributes\":[{\"Name\":\"sub\",\"Value\":\"5b4cb202-62c2-4420-a353-60f78e2fd4b1\"},{\"Name\":\"identities\",\"Value\":\"[{\\\"userId\\\":\\\"104142427804075574374\\\",\\\"providerName\\\":\\\"Google\\\",\\\"providerType\\\":\\\"Google\\\",\\\"issuer\\\":null,\\\"primary\\\":true,\\\"dateCreated\\\":1649343181938}]\"},{\"Name\":\"email_verified\",\"Value\":\"false\"},{\"Name\":\"email\",\"Value\":\"yasen_abudikeranmu@student.smc.edu\"}],\"Username\":\"google_104142427804075574374\"}",
//           "CognitoIdentityServiceProvider.7uh8lb2idnder3jkjte0kqub4g.google_104142427804075574374.userData": "{\"UserAttributes\":[{\"Name\":\"sub\",\"Value\":\"7ee7bebb-291c-47e0-ae3a-83795973d5f4\"},{\"Name\":\"identities\",\"Value\":\"[{\\\"userId\\\":\\\"104142427804075574374\\\",\\\"providerName\\\":\\\"Google\\\",\\\"providerType\\\":\\\"Google\\\",\\\"issuer\\\":null,\\\"primary\\\":true,\\\"dateCreated\\\":1650398377875}]\"}],\"Username\":\"google_104142427804075574374\"}",
//           "CognitoIdentityServiceProvider.46msp7htgnn0s6gc5rg4kjlss5.google_104142427804075574374.accessToken": "eyJraWQiOiJyWHg1RGxjbWYyZWl3TGRqMG1zZ3lxd2RLWk92enVRRmJMREZyRjJ6UnA4PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI1YjRjYjIwMi02MmMyLTQ0MjAtYTM1My02MGY3OGUyZmQ0YjEiLCJjb2duaXRvOmdyb3VwcyI6WyJ1cy1lYXN0LTFfVkRHSXRoMkhwX0dvb2dsZSJdLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9WREdJdGgySHAiLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiI0Nm1zcDdodGdubjBzNmdjNXJnNGtqbHNzNSIsIm9yaWdpbl9qdGkiOiJhNDFmNWU2OC0yNGRjLTQwOTItYjY3NC0yOTExM2JjZjM1NjEiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNjUwMzQ4NDg5LCJleHAiOjE2NTAzNTIwODksImlhdCI6MTY1MDM0ODQ4OSwianRpIjoiMzAxYzA3ZTctY2U3NS00ZmFmLWFmNmEtNzk2MjU0YTgyZGMzIiwidXNlcm5hbWUiOiJnb29nbGVfMTA0MTQyNDI3ODA0MDc1NTc0Mzc0In0.EMStQ99VeUoaKvnn2yf6lxLAfjAq9JT9_onZHee3BX4medo1nlhmssB39uVYLwwYZHG0y9t1cM9-uoqakBJ-DOEmNcgQXz190uBDYCi615yO2W7VPrqvYtZvBGzvCKHfCB7gtc5MOwWsMHyIrOCTq59rMlSOpNPClfroYIWLtJ0E570wDhlswWZn8oVthiykxQ18PXz3X4O2T4eSTLoTCPyN7PaTtowoWgk0SU92c12MtFZx84xFUAaBgZSQsxBOoUAli0-m8KJbYVpvVo3HvhLviBAvAhAzv8F-B8JeiUbxq-znbgq3uvlrvhU-lnRziqx1eWBH3xEDbYZd1VoIhg",
//           "CognitoIdentityServiceProvider.7uh8lb2idnder3jkjte0kqub4g.google_104142427804075574374.accessToken": "eyJraWQiOiJGUkZpd0w5ckZONjlpcTloaThoaDdZXC9lUFdGOURsMFNPcmkzZ3RrRzJLaz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI3ZWU3YmViYi0yOTFjLTQ3ZTAtYWUzYS04Mzc5NTk3M2Q1ZjQiLCJjb2duaXRvOmdyb3VwcyI6WyJ1cy1lYXN0LTFfRUtTcWRpVnJjX0dvb2dsZSJdLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9FS1NxZGlWcmMiLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiI3dWg4bGIyaWRuZGVyM2pranRlMGtxdWI0ZyIsIm9yaWdpbl9qdGkiOiJhNDg2NzEwMS0xMTBlLTQ5MGYtYTA4Mi02ODUyZDhlMDBlOGYiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNjUwMzk4NDkzLCJleHAiOjE2NTA0OTI0NzQsImlhdCI6MTY1MDQ4ODg3NCwianRpIjoiY2Y3YzdjMzEtZTY2Ny00MDQ5LTlhMzQtMmNlYzVkZThiZjg4IiwidXNlcm5hbWUiOiJnb29nbGVfMTA0MTQyNDI3ODA0MDc1NTc0Mzc0In0.GxQYS5myVYUuoH-8iY74aiIY0KpNMCCDCV06n1Kl8tsB3FiPejMVcwH10ije56JkGIWKuxJ2YKQUYSLQ_66YOtc1aRhlOh9le8TDGCdYTOWl_Hu2OgvkaLGJoK2fa60s6OG4I7fIpcvX5XSXcJ5xrgCHFGZFNcsRgKkaw5xPKlIii2xUR8SyQHMBWJqho_XNXoSGPjcAugKAiaxbTlZDSzhPV5EVoty9_y_xfksAqp_jGPrP3XZzG6JtpQCQjPRu_W3XEYPhEIY1I2tGEFeC_Q5fjgMKO9HqsFq9QMr6qcTKhe3SBr4b5OKo3mu5ZiUwAB8wNXi98rKSbdPPgF6RDA",
//           "CognitoIdentityServiceProvider.7uh8lb2idnder3jkjte0kqub4g.google_104142427804075574374.clockDrift": "0",
//           "CognitoIdentityServiceProvider.7uh8lb2idnder3jkjte0kqub4g.LastAuthUser": "google_104142427804075574374",
//           "CognitoIdentityServiceProvider.7uh8lb2idnder3jkjte0kqub4g.google_104142427804075574374.idToken": "eyJraWQiOiJ5NFFveWhSSkZOU01WaHRSS2tkUlpiRjJXaVZiZllsakRCMjdMeDMyNGxzPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiVWdVMkw0NlJXcHRZaEctU3BrV1ZhUSIsInN1YiI6IjdlZTdiZWJiLTI5MWMtNDdlMC1hZTNhLTgzNzk1OTczZDVmNCIsImNvZ25pdG86Z3JvdXBzIjpbInVzLWVhc3QtMV9FS1NxZGlWcmNfR29vZ2xlIl0sImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX0VLU3FkaVZyYyIsImNvZ25pdG86dXNlcm5hbWUiOiJnb29nbGVfMTA0MTQyNDI3ODA0MDc1NTc0Mzc0Iiwib3JpZ2luX2p0aSI6ImE0ODY3MTAxLTExMGUtNDkwZi1hMDgyLTY4NTJkOGUwMGU4ZiIsImF1ZCI6Ijd1aDhsYjJpZG5kZXIzamtqdGUwa3F1YjRnIiwiaWRlbnRpdGllcyI6W3sidXNlcklkIjoiMTA0MTQyNDI3ODA0MDc1NTc0Mzc0IiwicHJvdmlkZXJOYW1lIjoiR29vZ2xlIiwicHJvdmlkZXJUeXBlIjoiR29vZ2xlIiwiaXNzdWVyIjpudWxsLCJwcmltYXJ5IjoidHJ1ZSIsImRhdGVDcmVhdGVkIjoiMTY1MDM5ODM3Nzg3NSJ9XSwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2NTAzOTg0OTMsImV4cCI6MTY1MDQ5MjQ3NCwiaWF0IjoxNjUwNDg4ODc0LCJqdGkiOiI4MDc3OTAyOS05OGQxLTQxMzctOTI5NS03ZTdjYTJmZGY1NWQifQ.eQuDV5US88w4smmRLjOfal8vH6FAihSKrLw1Oszj30WSiK81GasBfHN6GKaW7vGM9LEw9oMQXTkG2lCXhgWerY6hGzvd6lf3S-iMCDYRppOIStemF-bAIIEhNFfhjPY32bMnqciv53o5wQoVI7OWcmKsCNQ_CnYZ-aaInXZQ4ngmkgyN1uHP3akokCYRSgrwiYgnsg59vQju_1Yvvq5iO3sce-9h2-1adZWIktEXNgrpDjpmuhFjot22g9pmiROcG45qu6G2HLFh3RfeL6jB-RAqmAsa29vwA9EZrdFJjwIls5aeScqMvS2x5Iz_EWMhAk70W5fxR41_74epdgwRHQ",
//           "student": "",
//           "CognitoIdentityServiceProvider.46msp7htgnn0s6gc5rg4kjlss5.google_104142427804075574374.clockDrift": "0",
//           "ally-supports-cache": "{\"userAgent\":\"Mozilla/5.0 (iPad; CPU OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.77 Mobile/15E148 Safari/604.1\",\"version\":\"1.4.1\",\"focusAreaImgTabindex\":false,\"focusAreaTabindex\":false,\"focusAreaWithoutHref\":false,\"focusAudioWithoutControls\":false,\"focusBrokenImageMap\":true,\"focusChildrenOfFocusableFlexbox\":false,\"focusFieldsetDisabled\":false,\"focusFieldset\":false,\"focusFlexboxContainer\":false,\"focusFormDisabled\":true,\"focusImgIsmap\":false,\"focusImgUsemapTabindex\":true,\"focusInHiddenIframe\":true,\"focusInvalidTabindex\":false,\"focusLabelTabindex\":true,\"focusObjectSvg\":true,\"focusObjectSvgHidden\":false,\"focusRedirectImgUsemap\":false,\"focusRedirectLegend\":\"\",\"focusScrollBody\":false,\"focusScrollContainerWithoutOverflow\":false,\"focusScrollContainer\":false,\"focusSummary\":true,\"focusSvgFocusableAttribute\":false,\"focusSvgTabindexAttribute\":true,\"focusSvgNegativeTabindexAttribute\":true,\"focusSvgUseTabindex\":true,\"focusSvgForeignobjectTabindex\":true,\"focusSvg\":false,\"focusTabindexTrailingCharacters\":true,\"focusTable\":false,\"focusVideoWithoutControls\":false,\"cssShadowPiercingDeepCombinator\":\"\",\"focusInZeroDimensionObject\":false,\"focusObjectSwf\":true,\"focusSvgInIframe\":false,\"tabsequenceAreaAtImgPosition\":false,\"time\":\"2022-04-19T05:36:46.735Z\"}",
//           "CognitoIdentityServiceProvider.46msp7htgnn0s6gc5rg4kjlss5.LastAuthUser": "google_104142427804075574374"
//       }
//   },
//   "Session": null,
//   "client": {
//       "endpoint": "https://cognito-idp.us-east-1.amazonaws.com/",
//       "fetchOptions": {}
//   },
//   "signInUserSession": {
//       "idToken": {
//           "jwtToken": "eyJraWQiOiJ5NFFveWhSSkZOU01WaHRSS2tkUlpiRjJXaVZiZllsakRCMjdMeDMyNGxzPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiVWdVMkw0NlJXcHRZaEctU3BrV1ZhUSIsInN1YiI6IjdlZTdiZWJiLTI5MWMtNDdlMC1hZTNhLTgzNzk1OTczZDVmNCIsImNvZ25pdG86Z3JvdXBzIjpbInVzLWVhc3QtMV9FS1NxZGlWcmNfR29vZ2xlIl0sImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX0VLU3FkaVZyYyIsImNvZ25pdG86dXNlcm5hbWUiOiJnb29nbGVfMTA0MTQyNDI3ODA0MDc1NTc0Mzc0Iiwib3JpZ2luX2p0aSI6ImE0ODY3MTAxLTExMGUtNDkwZi1hMDgyLTY4NTJkOGUwMGU4ZiIsImF1ZCI6Ijd1aDhsYjJpZG5kZXIzamtqdGUwa3F1YjRnIiwiaWRlbnRpdGllcyI6W3sidXNlcklkIjoiMTA0MTQyNDI3ODA0MDc1NTc0Mzc0IiwicHJvdmlkZXJOYW1lIjoiR29vZ2xlIiwicHJvdmlkZXJUeXBlIjoiR29vZ2xlIiwiaXNzdWVyIjpudWxsLCJwcmltYXJ5IjoidHJ1ZSIsImRhdGVDcmVhdGVkIjoiMTY1MDM5ODM3Nzg3NSJ9XSwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2NTAzOTg0OTMsImV4cCI6MTY1MDQ5MjQ3NCwiaWF0IjoxNjUwNDg4ODc0LCJqdGkiOiI4MDc3OTAyOS05OGQxLTQxMzctOTI5NS03ZTdjYTJmZGY1NWQifQ.eQuDV5US88w4smmRLjOfal8vH6FAihSKrLw1Oszj30WSiK81GasBfHN6GKaW7vGM9LEw9oMQXTkG2lCXhgWerY6hGzvd6lf3S-iMCDYRppOIStemF-bAIIEhNFfhjPY32bMnqciv53o5wQoVI7OWcmKsCNQ_CnYZ-aaInXZQ4ngmkgyN1uHP3akokCYRSgrwiYgnsg59vQju_1Yvvq5iO3sce-9h2-1adZWIktEXNgrpDjpmuhFjot22g9pmiROcG45qu6G2HLFh3RfeL6jB-RAqmAsa29vwA9EZrdFJjwIls5aeScqMvS2x5Iz_EWMhAk70W5fxR41_74epdgwRHQ",
//           "payload": {
//               "at_hash": "UgU2L46RWptYhG-SpkWVaQ",
//               "sub": "7ee7bebb-291c-47e0-ae3a-83795973d5f4",
//               "cognito:groups": [
//                   "us-east-1_EKSqdiVrc_Google"
//               ],
//               "iss": "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_EKSqdiVrc",
//               "cognito:username": "google_104142427804075574374",
//               "origin_jti": "a4867101-110e-490f-a082-6852d8e00e8f",
//               "aud": "7uh8lb2idnder3jkjte0kqub4g",
//               "identities": [
//                   {
//                       "userId": "104142427804075574374",
//                       "providerName": "Google",
//                       "providerType": "Google",
//                       "issuer": null,
//                       "primary": "true",
//                       "dateCreated": "1650398377875"
//                   }
//               ],
//               "token_use": "id",
//               "auth_time": 1650398493,
//               "exp": 1650492474,
//               "iat": 1650488874,
//               "jti": "80779029-98d1-4137-9295-7e7ca2fdf55d"
//           }
//       },
//       "refreshToken": {
//           "token": "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.NU1CJNUoWWrLLLbYubs20P_ZXXsTgtdL8edkOd9UVJk1MVSeS8aCifoDzPSfFCwFCfH7N-wvkvDWLp5WGJ9BRISPeEmrTcXgDcXo71Z_pQs5UnkabiPhoL3_0xFILQIAmiL4yEeC5h4mtYcPoIEjFM77Ll10v6U3FDinzdTs54enTyq86IyMJCCo4f2YyOBvj7gsZ4N7SBlMVa2b-1Fdn77epbhEn8eEl5Xoi4GKB37rA_73HQd3Jn18mVglWRmUO2tnWkcR4faVh2NLX9ccBdQ7tgYg65Umw0lKQZ2DPlJzvjBDITGU7i_Q0K-SAhfUSMUu_f3pAM1_WTAExZOViQ.RayYyMsIDrg2Xjyu.wXJbGvIXVhH6ltdQID2JJY-KLqv_vBZhysZVjS3FfyixuFqBDxLc7utuqYvo5yF_pbJmXKfWPYY3zny1Gqsr3Klioc_KeRTOigcNaQ6cwowixX_C3LthHPfXP73rlyhirexBezBHvFMKEDE0VO04z8X4-BGYjdyHbStxXZcrpQnc_nRQMUQE5t4hIYSOFynmFt7HtvyZPCBxUhshraRP9Km_yds45ltas6aHDEhgJaRB1Vz9enm8j8oZ-642-b9NLD_yzfQAOTmusS6By9mPEHZUnpO68SbE82gdEfGBPAY6Y0rlVpcdhTXioRRvGVyJob-2dLHM3jC3QHQrFXudCGtFK2YfPWfsDNE5uxZSb2CyXMr5SVL6tWqI8bQxASUWTkn5gGySBh9xL1GW3_z54A3imZ1l9d7yRDMHlfdHl805S7FOnqlYM5OSatb-_C7EZajcNbJ7WR56_JZ5PFnoGhVXYRkY_w0tJvL8-0L4rpk9OiiDfNnB0WWvWF2xAm0CbtRzae_pGINE8euuXLy1dtJ86jp-B93Z1kwhoA87wZQ43Y9lVFNJHnoH8L3-10erYRsHgHWkV_2vB-EaKNu_MEPPu6OwEdos2Y3ZRaxywi67Km_L80LW3mIz2JvFDR_XjJXniFoRKklRBA0WakUlbCaNQ4jIudBwAcW1IpU3KzZYaiYxK6XXbISJewxMVrHNctLsv4mwil9H2LuDGe_GIyD0o5iiZ0_PBymG4AfQ9VtfeiR7sUatgpwRvcZyTLyPTRYhSRAoK0VMwzn0gid8pJeeNoRGst_xdedpd2Uwyx7p-AZ4E-moaiYxkltNT7tPdlf4n9oyKmjS3kRTdiK6RZwDeTKtzkFxiChmH7D2De28vfmFLvjm8kjbakbcgkiWx2UnekgdQYv8LoqRSHeIVKbu3pEhG-BMwEOj4y1DlMZMqIl2sO5HTBw13wm9_W0cY4pBq1fhFQdGHDnDQsbizHKPbyMqzKRE3igAWcMPSXpuoj5MKMOrqGE4vTYAzIqUPDDR4J3SIfIgMdVB5Ry62HjAq_DXWT5OWhyNnVA8GC7ibg34OyUZ4vvmmmSxM8uI3aBmvnoagFXNKkq5gv0nQG_tGETj8g2b5QmsRg740V0heNlrYkwTvGVBGhD0ZGOPndNkTACAV0qxCvOYKq6yeF1fmx8UDOyqTxhlxIri2Bjly5FMZXSgfjHZkI2PISglevGoXB6WlNw-BiMVcdB8uovxjGB1lrdGdAbHNiRyis5aBJdk9QsqZxMLLhsc7dVS_ypfHkPpJVMD2C6VFU7YsTxnTQ.Wq2VubbZB2-FhJiC3CRX7g"
//       },
//       "accessToken": {
//           "jwtToken": "eyJraWQiOiJGUkZpd0w5ckZONjlpcTloaThoaDdZXC9lUFdGOURsMFNPcmkzZ3RrRzJLaz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI3ZWU3YmViYi0yOTFjLTQ3ZTAtYWUzYS04Mzc5NTk3M2Q1ZjQiLCJjb2duaXRvOmdyb3VwcyI6WyJ1cy1lYXN0LTFfRUtTcWRpVnJjX0dvb2dsZSJdLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9FS1NxZGlWcmMiLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiI3dWg4bGIyaWRuZGVyM2pranRlMGtxdWI0ZyIsIm9yaWdpbl9qdGkiOiJhNDg2NzEwMS0xMTBlLTQ5MGYtYTA4Mi02ODUyZDhlMDBlOGYiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNjUwMzk4NDkzLCJleHAiOjE2NTA0OTI0NzQsImlhdCI6MTY1MDQ4ODg3NCwianRpIjoiY2Y3YzdjMzEtZTY2Ny00MDQ5LTlhMzQtMmNlYzVkZThiZjg4IiwidXNlcm5hbWUiOiJnb29nbGVfMTA0MTQyNDI3ODA0MDc1NTc0Mzc0In0.GxQYS5myVYUuoH-8iY74aiIY0KpNMCCDCV06n1Kl8tsB3FiPejMVcwH10ije56JkGIWKuxJ2YKQUYSLQ_66YOtc1aRhlOh9le8TDGCdYTOWl_Hu2OgvkaLGJoK2fa60s6OG4I7fIpcvX5XSXcJ5xrgCHFGZFNcsRgKkaw5xPKlIii2xUR8SyQHMBWJqho_XNXoSGPjcAugKAiaxbTlZDSzhPV5EVoty9_y_xfksAqp_jGPrP3XZzG6JtpQCQjPRu_W3XEYPhEIY1I2tGEFeC_Q5fjgMKO9HqsFq9QMr6qcTKhe3SBr4b5OKo3mu5ZiUwAB8wNXi98rKSbdPPgF6RDA",
//           "payload": {
//               "sub": "7ee7bebb-291c-47e0-ae3a-83795973d5f4",
//               "cognito:groups": [
//                   "us-east-1_EKSqdiVrc_Google"
//               ],
//               "iss": "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_EKSqdiVrc",
//               "version": 2,
//               "client_id": "7uh8lb2idnder3jkjte0kqub4g",
//               "origin_jti": "a4867101-110e-490f-a082-6852d8e00e8f",
//               "token_use": "access",
//               "scope": "aws.cognito.signin.user.admin phone openid profile email",
//               "auth_time": 1650398493,
//               "exp": 1650492474,
//               "iat": 1650488874,
//               "jti": "cf7c7c31-e667-4049-9a34-2cec5de8bf88",
//               "username": "google_104142427804075574374"
//           }
//       },
//       "clockDrift": 0
//   },
//   "authenticationFlowType": "USER_SRP_AUTH",
//   "storage": {
//       "CognitoIdentityServiceProvider.7uh8lb2idnder3jkjte0kqub4g.google_104142427804075574374.refreshToken": "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.NU1CJNUoWWrLLLbYubs20P_ZXXsTgtdL8edkOd9UVJk1MVSeS8aCifoDzPSfFCwFCfH7N-wvkvDWLp5WGJ9BRISPeEmrTcXgDcXo71Z_pQs5UnkabiPhoL3_0xFILQIAmiL4yEeC5h4mtYcPoIEjFM77Ll10v6U3FDinzdTs54enTyq86IyMJCCo4f2YyOBvj7gsZ4N7SBlMVa2b-1Fdn77epbhEn8eEl5Xoi4GKB37rA_73HQd3Jn18mVglWRmUO2tnWkcR4faVh2NLX9ccBdQ7tgYg65Umw0lKQZ2DPlJzvjBDITGU7i_Q0K-SAhfUSMUu_f3pAM1_WTAExZOViQ.RayYyMsIDrg2Xjyu.wXJbGvIXVhH6ltdQID2JJY-KLqv_vBZhysZVjS3FfyixuFqBDxLc7utuqYvo5yF_pbJmXKfWPYY3zny1Gqsr3Klioc_KeRTOigcNaQ6cwowixX_C3LthHPfXP73rlyhirexBezBHvFMKEDE0VO04z8X4-BGYjdyHbStxXZcrpQnc_nRQMUQE5t4hIYSOFynmFt7HtvyZPCBxUhshraRP9Km_yds45ltas6aHDEhgJaRB1Vz9enm8j8oZ-642-b9NLD_yzfQAOTmusS6By9mPEHZUnpO68SbE82gdEfGBPAY6Y0rlVpcdhTXioRRvGVyJob-2dLHM3jC3QHQrFXudCGtFK2YfPWfsDNE5uxZSb2CyXMr5SVL6tWqI8bQxASUWTkn5gGySBh9xL1GW3_z54A3imZ1l9d7yRDMHlfdHl805S7FOnqlYM5OSatb-_C7EZajcNbJ7WR56_JZ5PFnoGhVXYRkY_w0tJvL8-0L4rpk9OiiDfNnB0WWvWF2xAm0CbtRzae_pGINE8euuXLy1dtJ86jp-B93Z1kwhoA87wZQ43Y9lVFNJHnoH8L3-10erYRsHgHWkV_2vB-EaKNu_MEPPu6OwEdos2Y3ZRaxywi67Km_L80LW3mIz2JvFDR_XjJXniFoRKklRBA0WakUlbCaNQ4jIudBwAcW1IpU3KzZYaiYxK6XXbISJewxMVrHNctLsv4mwil9H2LuDGe_GIyD0o5iiZ0_PBymG4AfQ9VtfeiR7sUatgpwRvcZyTLyPTRYhSRAoK0VMwzn0gid8pJeeNoRGst_xdedpd2Uwyx7p-AZ4E-moaiYxkltNT7tPdlf4n9oyKmjS3kRTdiK6RZwDeTKtzkFxiChmH7D2De28vfmFLvjm8kjbakbcgkiWx2UnekgdQYv8LoqRSHeIVKbu3pEhG-BMwEOj4y1DlMZMqIl2sO5HTBw13wm9_W0cY4pBq1fhFQdGHDnDQsbizHKPbyMqzKRE3igAWcMPSXpuoj5MKMOrqGE4vTYAzIqUPDDR4J3SIfIgMdVB5Ry62HjAq_DXWT5OWhyNnVA8GC7ibg34OyUZ4vvmmmSxM8uI3aBmvnoagFXNKkq5gv0nQG_tGETj8g2b5QmsRg740V0heNlrYkwTvGVBGhD0ZGOPndNkTACAV0qxCvOYKq6yeF1fmx8UDOyqTxhlxIri2Bjly5FMZXSgfjHZkI2PISglevGoXB6WlNw-BiMVcdB8uovxjGB1lrdGdAbHNiRyis5aBJdk9QsqZxMLLhsc7dVS_ypfHkPpJVMD2C6VFU7YsTxnTQ.Wq2VubbZB2-FhJiC3CRX7g",
//       "amplify-redirected-from-hosted-ui": "true",
//       "CognitoIdentityServiceProvider.46msp7htgnn0s6gc5rg4kjlss5.google_104142427804075574374.refreshToken": "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.SPctAHfW81D021GrrSxNFWCn6NWJPdHudpstvbo70_DHTtmvUjM1oBdq4qeYVjstyEyG20mV7pAyyhlX3ZhWLt4jUMNyUgoue0hSqFbr0ZTDgIdRVOoeVbyNVIecyt9jL3KQQiIf6Gh6nuewX8bYBZkRXorY_OeFvO14GMq7fE4yDHhbjxxgm3iGU0THlWDAnIUZ20W-rCFJ-pXL8-YejG1oaDnBhKF4EoWGB-LyjdZXewhJMncsQtOwvRHhdGcxbceNIq0VDIRcZlE8PpO_5K1VfHBh7zoqhhSE2j7llAsMJglJOHy5_wSYnRnJSzAckP76d4ZkY7MlrZdwhO9Bqw.nl40ETfzhVGDBvQN.KSlGTmfkOKK-JJtWq4HyEk3l4QiOCl5UCHgj-VD8Hbt91UGIa-krztGof2LOTyQtoAKxkIsgUNYujehjJs9EXIfstyVlyBSDisyJ3kadEGjQPNT5InYwpANSr3oc7cgdiKu64eSVDEUvpAowcoC6CgOTndreOD_p3veulMLq8IU-7e4d2xxRiZCREG8gluroP4r0okU3mClr5aMcJ88P8hhcKblWDZa0X5IZYgFVRW55v7Ilas0fAI_jZ7mOv0blQnDcpvASbypt0YG6fhiJDmkobJaYwixDNKQKdC8PJicQlj1Ty8gmpIGrDgF7Cg9CY_CXGH0csyYJW6KW1-CJiOjY2AHgVfHzX_-0h-iWmulGPvaRwZkit-0z9BR92sMp_hYiBGApnkzfSW6GK6oH08AMkf0Zf4dYaVZQYouT_w7KBY78h3jOXfiPabF5lf_c2XH48WF6IhJrKPq-q4XfS1G4ufZFMGSWtuHhdHCGrmCeDm7JzT2ohQkl5CuRhhLeAUvNwdF92Rf3aYDggmSpr1qRuQ8d2IXjZ4Tn0nYVEumqK7KafR1_CIK8c1WJvEuP74YBEIbC1-CsV6PGxVFusYVRIhyK-BusjPmsttNpvbeYZBKxOfxcPVqDsd5sYI_cIzUFA6p2lgTThfh2Hbk06O4PlWSmHzVFjVAVFdjhofJYCUSYz2GbDS6BG1nDGjcIUZkN_mEG40cWkeVLTyTbzRCo16iuWFKvnUCJdnx4GURhk2rPZMjO8RvHnLR4gSQMzQZpKeNOYTBoyrXrYxXZUfQpWCEReGRyPfUFH3jpcY_BTRvzaCzLvl_PjSHOf9FbebJF0GbKjgwRUANoFcp2EQpONaMti6YmA_zB7yOw_BwBHTPto1bRzct1e83RG-aNu1DqFPXE9iX2qlTa0y7UU9Z52nqrMgiIbbbwSjWvOxZ3VsU2Q7Siw2JPHnNw5KPoRIz69KLbR24nUi-0cR1BpeCHDdoNcvuQARfWN6EI6kEG_oMhFO2-tXHZ3fMU1N65vzLqudC9lIfOIfMiaIxqPH67JS_KhecoplsCeF2EGcXTsAAQSEnMGlILCyFUBKep3yqODdOn40Jt69AwB002pzQza9MxAltKX-UuldZz5YgpYWWY8_i57rfSqzSL-B5ILaS7HP5FIIx666a4TG5iocD15U-lowsSqtdo5wuwk18AGjACihHn6zV78LQWMJHYol6AwGccyjtnn2g-sJz0qsJORTM2KyQBBH18fjrN-8yNNKo-kiR_-Kbq_U4Jqo4JW5knJeUs9lGkhY5AB4Gdxi9e7g._pckxTY3eUih49j-WmtGJQ",
//       "amplify-signin-with-hostedUI": "true",
//       "CognitoIdentityServiceProvider.46msp7htgnn0s6gc5rg4kjlss5.google_104142427804075574374.idToken": "eyJraWQiOiJ2XC9jaDNsTmV3MytZVmZORnZmXC9qT3JNMmE1RnhUM1I2RnYrUUE2dU1Ccnc9IiwiYWxnIjoiUlMyNTYifQ.eyJhdF9oYXNoIjoiUXJ1NlQ5bGxtZGttWFZYMUJhZnV0dyIsInN1YiI6IjViNGNiMjAyLTYyYzItNDQyMC1hMzUzLTYwZjc4ZTJmZDRiMSIsImNvZ25pdG86Z3JvdXBzIjpbInVzLWVhc3QtMV9WREdJdGgySHBfR29vZ2xlIl0sImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfVkRHSXRoMkhwIiwiY29nbml0bzp1c2VybmFtZSI6Imdvb2dsZV8xMDQxNDI0Mjc4MDQwNzU1NzQzNzQiLCJvcmlnaW5fanRpIjoiYTQxZjVlNjgtMjRkYy00MDkyLWI2NzQtMjkxMTNiY2YzNTYxIiwiYXVkIjoiNDZtc3A3aHRnbm4wczZnYzVyZzRramxzczUiLCJpZGVudGl0aWVzIjpbeyJ1c2VySWQiOiIxMDQxNDI0Mjc4MDQwNzU1NzQzNzQiLCJwcm92aWRlck5hbWUiOiJHb29nbGUiLCJwcm92aWRlclR5cGUiOiJHb29nbGUiLCJpc3N1ZXIiOm51bGwsInByaW1hcnkiOiJ0cnVlIiwiZGF0ZUNyZWF0ZWQiOiIxNjQ5MzQzMTgxOTM4In1dLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTY1MDM0ODQ4OSwiZXhwIjoxNjUwMzUyMDg5LCJpYXQiOjE2NTAzNDg0ODksImp0aSI6IjZmN2YxOWNiLTgzYjQtNDY2Yi05ZWMzLTNjZWI4MDA1ODE0MyIsImVtYWlsIjoieWFzZW5fYWJ1ZGlrZXJhbm11QHN0dWRlbnQuc21jLmVkdSJ9.LKKgmsfwctuB34FRpDsY4TS3V5W93pNo1A3TBpLTLYdgILsciR3FylBFAED6PbQsJ_CWTowJUMQpCgPNVdFzzAzJl0_jAOp3z5HywswLAcTu8vNDLIG-jQqW7pYVau3sOwVgWUrtBVezJ2ULZQJ5c8nptvSvnsWnXmf-hHnDSmcUSr_a_UXJAnX6VmqFZ60mff_4fvqyly2UGolZbzw1v7BhP6kaosOi4rpXzSKO4AsplWSPO86vwYmkqW_52VL6tNZ90F6sya4kk14r6O5vSOlOewGw0prff7OlNnd7aQvVbWNmzUylIYSmhqwmPDzO1Fxc-UhJoMs4EP4lnp0YWg",
//       "CognitoIdentityServiceProvider.46msp7htgnn0s6gc5rg4kjlss5.google_104142427804075574374.userData": "{\"UserAttributes\":[{\"Name\":\"sub\",\"Value\":\"5b4cb202-62c2-4420-a353-60f78e2fd4b1\"},{\"Name\":\"identities\",\"Value\":\"[{\\\"userId\\\":\\\"104142427804075574374\\\",\\\"providerName\\\":\\\"Google\\\",\\\"providerType\\\":\\\"Google\\\",\\\"issuer\\\":null,\\\"primary\\\":true,\\\"dateCreated\\\":1649343181938}]\"},{\"Name\":\"email_verified\",\"Value\":\"false\"},{\"Name\":\"email\",\"Value\":\"yasen_abudikeranmu@student.smc.edu\"}],\"Username\":\"google_104142427804075574374\"}",
//       "CognitoIdentityServiceProvider.7uh8lb2idnder3jkjte0kqub4g.google_104142427804075574374.userData": "{\"UserAttributes\":[{\"Name\":\"sub\",\"Value\":\"7ee7bebb-291c-47e0-ae3a-83795973d5f4\"},{\"Name\":\"identities\",\"Value\":\"[{\\\"userId\\\":\\\"104142427804075574374\\\",\\\"providerName\\\":\\\"Google\\\",\\\"providerType\\\":\\\"Google\\\",\\\"issuer\\\":null,\\\"primary\\\":true,\\\"dateCreated\\\":1650398377875}]\"}],\"Username\":\"google_104142427804075574374\"}",
//       "CognitoIdentityServiceProvider.46msp7htgnn0s6gc5rg4kjlss5.google_104142427804075574374.accessToken": "eyJraWQiOiJyWHg1RGxjbWYyZWl3TGRqMG1zZ3lxd2RLWk92enVRRmJMREZyRjJ6UnA4PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI1YjRjYjIwMi02MmMyLTQ0MjAtYTM1My02MGY3OGUyZmQ0YjEiLCJjb2duaXRvOmdyb3VwcyI6WyJ1cy1lYXN0LTFfVkRHSXRoMkhwX0dvb2dsZSJdLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9WREdJdGgySHAiLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiI0Nm1zcDdodGdubjBzNmdjNXJnNGtqbHNzNSIsIm9yaWdpbl9qdGkiOiJhNDFmNWU2OC0yNGRjLTQwOTItYjY3NC0yOTExM2JjZjM1NjEiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNjUwMzQ4NDg5LCJleHAiOjE2NTAzNTIwODksImlhdCI6MTY1MDM0ODQ4OSwianRpIjoiMzAxYzA3ZTctY2U3NS00ZmFmLWFmNmEtNzk2MjU0YTgyZGMzIiwidXNlcm5hbWUiOiJnb29nbGVfMTA0MTQyNDI3ODA0MDc1NTc0Mzc0In0.EMStQ99VeUoaKvnn2yf6lxLAfjAq9JT9_onZHee3BX4medo1nlhmssB39uVYLwwYZHG0y9t1cM9-uoqakBJ-DOEmNcgQXz190uBDYCi615yO2W7VPrqvYtZvBGzvCKHfCB7gtc5MOwWsMHyIrOCTq59rMlSOpNPClfroYIWLtJ0E570wDhlswWZn8oVthiykxQ18PXz3X4O2T4eSTLoTCPyN7PaTtowoWgk0SU92c12MtFZx84xFUAaBgZSQsxBOoUAli0-m8KJbYVpvVo3HvhLviBAvAhAzv8F-B8JeiUbxq-znbgq3uvlrvhU-lnRziqx1eWBH3xEDbYZd1VoIhg",
//       "CognitoIdentityServiceProvider.7uh8lb2idnder3jkjte0kqub4g.google_104142427804075574374.accessToken": "eyJraWQiOiJGUkZpd0w5ckZONjlpcTloaThoaDdZXC9lUFdGOURsMFNPcmkzZ3RrRzJLaz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI3ZWU3YmViYi0yOTFjLTQ3ZTAtYWUzYS04Mzc5NTk3M2Q1ZjQiLCJjb2duaXRvOmdyb3VwcyI6WyJ1cy1lYXN0LTFfRUtTcWRpVnJjX0dvb2dsZSJdLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9FS1NxZGlWcmMiLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiI3dWg4bGIyaWRuZGVyM2pranRlMGtxdWI0ZyIsIm9yaWdpbl9qdGkiOiJhNDg2NzEwMS0xMTBlLTQ5MGYtYTA4Mi02ODUyZDhlMDBlOGYiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNjUwMzk4NDkzLCJleHAiOjE2NTA0OTI0NzQsImlhdCI6MTY1MDQ4ODg3NCwianRpIjoiY2Y3YzdjMzEtZTY2Ny00MDQ5LTlhMzQtMmNlYzVkZThiZjg4IiwidXNlcm5hbWUiOiJnb29nbGVfMTA0MTQyNDI3ODA0MDc1NTc0Mzc0In0.GxQYS5myVYUuoH-8iY74aiIY0KpNMCCDCV06n1Kl8tsB3FiPejMVcwH10ije56JkGIWKuxJ2YKQUYSLQ_66YOtc1aRhlOh9le8TDGCdYTOWl_Hu2OgvkaLGJoK2fa60s6OG4I7fIpcvX5XSXcJ5xrgCHFGZFNcsRgKkaw5xPKlIii2xUR8SyQHMBWJqho_XNXoSGPjcAugKAiaxbTlZDSzhPV5EVoty9_y_xfksAqp_jGPrP3XZzG6JtpQCQjPRu_W3XEYPhEIY1I2tGEFeC_Q5fjgMKO9HqsFq9QMr6qcTKhe3SBr4b5OKo3mu5ZiUwAB8wNXi98rKSbdPPgF6RDA",
//       "CognitoIdentityServiceProvider.7uh8lb2idnder3jkjte0kqub4g.google_104142427804075574374.clockDrift": "0",
//       "CognitoIdentityServiceProvider.7uh8lb2idnder3jkjte0kqub4g.LastAuthUser": "google_104142427804075574374",
//       "CognitoIdentityServiceProvider.7uh8lb2idnder3jkjte0kqub4g.google_104142427804075574374.idToken": "eyJraWQiOiJ5NFFveWhSSkZOU01WaHRSS2tkUlpiRjJXaVZiZllsakRCMjdMeDMyNGxzPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiVWdVMkw0NlJXcHRZaEctU3BrV1ZhUSIsInN1YiI6IjdlZTdiZWJiLTI5MWMtNDdlMC1hZTNhLTgzNzk1OTczZDVmNCIsImNvZ25pdG86Z3JvdXBzIjpbInVzLWVhc3QtMV9FS1NxZGlWcmNfR29vZ2xlIl0sImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX0VLU3FkaVZyYyIsImNvZ25pdG86dXNlcm5hbWUiOiJnb29nbGVfMTA0MTQyNDI3ODA0MDc1NTc0Mzc0Iiwib3JpZ2luX2p0aSI6ImE0ODY3MTAxLTExMGUtNDkwZi1hMDgyLTY4NTJkOGUwMGU4ZiIsImF1ZCI6Ijd1aDhsYjJpZG5kZXIzamtqdGUwa3F1YjRnIiwiaWRlbnRpdGllcyI6W3sidXNlcklkIjoiMTA0MTQyNDI3ODA0MDc1NTc0Mzc0IiwicHJvdmlkZXJOYW1lIjoiR29vZ2xlIiwicHJvdmlkZXJUeXBlIjoiR29vZ2xlIiwiaXNzdWVyIjpudWxsLCJwcmltYXJ5IjoidHJ1ZSIsImRhdGVDcmVhdGVkIjoiMTY1MDM5ODM3Nzg3NSJ9XSwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2NTAzOTg0OTMsImV4cCI6MTY1MDQ5MjQ3NCwiaWF0IjoxNjUwNDg4ODc0LCJqdGkiOiI4MDc3OTAyOS05OGQxLTQxMzctOTI5NS03ZTdjYTJmZGY1NWQifQ.eQuDV5US88w4smmRLjOfal8vH6FAihSKrLw1Oszj30WSiK81GasBfHN6GKaW7vGM9LEw9oMQXTkG2lCXhgWerY6hGzvd6lf3S-iMCDYRppOIStemF-bAIIEhNFfhjPY32bMnqciv53o5wQoVI7OWcmKsCNQ_CnYZ-aaInXZQ4ngmkgyN1uHP3akokCYRSgrwiYgnsg59vQju_1Yvvq5iO3sce-9h2-1adZWIktEXNgrpDjpmuhFjot22g9pmiROcG45qu6G2HLFh3RfeL6jB-RAqmAsa29vwA9EZrdFJjwIls5aeScqMvS2x5Iz_EWMhAk70W5fxR41_74epdgwRHQ",
//       "student": "",
//       "CognitoIdentityServiceProvider.46msp7htgnn0s6gc5rg4kjlss5.google_104142427804075574374.clockDrift": "0",
//       "ally-supports-cache": "{\"userAgent\":\"Mozilla/5.0 (iPad; CPU OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.77 Mobile/15E148 Safari/604.1\",\"version\":\"1.4.1\",\"focusAreaImgTabindex\":false,\"focusAreaTabindex\":false,\"focusAreaWithoutHref\":false,\"focusAudioWithoutControls\":false,\"focusBrokenImageMap\":true,\"focusChildrenOfFocusableFlexbox\":false,\"focusFieldsetDisabled\":false,\"focusFieldset\":false,\"focusFlexboxContainer\":false,\"focusFormDisabled\":true,\"focusImgIsmap\":false,\"focusImgUsemapTabindex\":true,\"focusInHiddenIframe\":true,\"focusInvalidTabindex\":false,\"focusLabelTabindex\":true,\"focusObjectSvg\":true,\"focusObjectSvgHidden\":false,\"focusRedirectImgUsemap\":false,\"focusRedirectLegend\":\"\",\"focusScrollBody\":false,\"focusScrollContainerWithoutOverflow\":false,\"focusScrollContainer\":false,\"focusSummary\":true,\"focusSvgFocusableAttribute\":false,\"focusSvgTabindexAttribute\":true,\"focusSvgNegativeTabindexAttribute\":true,\"focusSvgUseTabindex\":true,\"focusSvgForeignobjectTabindex\":true,\"focusSvg\":false,\"focusTabindexTrailingCharacters\":true,\"focusTable\":false,\"focusVideoWithoutControls\":false,\"cssShadowPiercingDeepCombinator\":\"\",\"focusInZeroDimensionObject\":false,\"focusObjectSwf\":true,\"focusSvgInIframe\":false,\"tabsequenceAreaAtImgPosition\":false,\"time\":\"2022-04-19T05:36:46.735Z\"}",
//       "CognitoIdentityServiceProvider.46msp7htgnn0s6gc5rg4kjlss5.LastAuthUser": "google_104142427804075574374"
//   },
//   "keyPrefix": "CognitoIdentityServiceProvider.7uh8lb2idnder3jkjte0kqub4g",
//   "userDataKey": "CognitoIdentityServiceProvider.7uh8lb2idnder3jkjte0kqub4g.google_104142427804075574374.userData",
//   "attributes": {
//       "sub": "7ee7bebb-291c-47e0-ae3a-83795973d5f4",
//       "identities": "[{\"userId\":\"104142427804075574374\",\"providerName\":\"Google\",\"providerType\":\"Google\",\"issuer\":null,\"primary\":true,\"dateCreated\":1650398377875}]"
//   },
//   "preferredMFA": "NOMFA"
// }
