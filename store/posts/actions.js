export default {
    async actFetchLatestPost({commit},){
    try {
         const result = await this.$api.get('/posts', {
            params :{
                page:1,
                per_page:3
            }
        });
        
        if(result.status === 200){
            commit('mutFetchLatestPost',result.data)
        }
    } catch (error) {
            console.log('error of actFetchLatestPost',error.response.data);
    }
        
    }
}