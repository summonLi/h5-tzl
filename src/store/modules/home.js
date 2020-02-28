import request from '@utils/request'

const home = {
  state: {
    token:'',
    userInfo: {}
  },

  mutations: {
    SET_TOKEN:(state, token) => {
      state.token = token
    },
    USER_INFO: (state, userinfo) => {
      state.userInfo = userinfo
    }
  },

  action: {
    Login({ commit }, userInfo){
      const userName = userInfo.userName.trim();
      return new Promise((resolve,reject) => {
        request({
          url: '/api',
          method: 'post',
          data: {
            'userName': userName,
            'password':userInfo.passwork
          }
        }).then(response => {
          commit('SET_TOKEN',response.data.token);
          commit('USER_INFO',response.data);
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
