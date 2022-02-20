class Repository {
    constructor(name, description, url) {
        this.name        = name;
        this.description = description;
        this.url         = url;
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    getUrl() {
        return this.url;
    }

    setName(name) {
        this.name = name;
    }

    setDescription(description) {
        this.description = description;
    }

    setUrl(url) {
        this.url = url;
    }
}