export default store => {
  store.on('@init', () => ({
    login: {
      firstName: "Arm",
      lastName: "Test",
      isLoggedIn : false
    }
  }));

  store.on('login/update', (state, data) => {
    return {
      ...state,
      login: {
        firstName: "Arm",
        lastName: "Test",
        isLoggedIn : false
      }
    };
  });
};