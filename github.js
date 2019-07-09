class GitHub{
    constructor(){
        this.client_id = '1d7cfe6d8830063dd8ce';
        this.client_secret = '415004163a65d89e7bb4b5930b60135dce876ecd';
        this.repos_count = 5;
        this.repos_sort ='created: asc'

    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoReponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData= await profileResponse.json();
        const reposData = await repoReponse.json();
        return {
        
             profile: profileData,
             repos: reposData

        }
    }
    
}