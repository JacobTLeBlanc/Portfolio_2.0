export class RepositoryService {

    constructor() {
        this.url = "https://i1qy3kbvye.execute-api.us-east-1.amazonaws.com/v1/get_repos/"
    }

    async getRepos(user) {
        return (await (fetch(this.url + user))).json()
    }

}