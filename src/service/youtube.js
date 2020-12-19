class Youtube {
    
    constructor(key) {
        this.key = key;

        this.requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };
    }


    async mostPopular() {

        
        const response = await fetch(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&key=${this.key}`,
            this.requestOptions);
        const result = await response.json();
        
        const videos = result.items.map (item => {
            return {id : item.id, name : item.snippet};
            });
        return videos;
        
    }

    async search(name) {
        const response = await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?q=${name}&part=snippet&type=video&maxResults=10&key=AIzaSyCCc_I30kyjugwIB-BnghJJqi8hagtgCT8`,
            this.requestOptions);
        const result = await response.json();

        const videos = result.items.map (item => {
            return {id : item.id.videoId, name : item.snippet};
        });
        
        return videos;
        
    }
}

export default Youtube;