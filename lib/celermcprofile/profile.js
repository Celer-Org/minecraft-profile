'use strict';

const axios = require('axios')


class McProfile {
    constructor(){ }

    async getUUID(username) {
        if (Array.isArray(username)) {
            const data = {
                method: 'post',
                url: 'https://api.mojang.com/profiles/minecraft',
                headers: {
                    'Content-Type': 'application/json',
                },
                data: username
            }
    
            try {
                const response = await axios(data)
                return response.data
            } catch (error) {
                return new Error(error)
            }
        } else {
            const data = {
                method: 'get',
                url: `https://api.mojang.com/users/profiles/minecraft/${username}`
            }
    
            try {
                const response = await axios(data)
                return response.data.id
            } catch (error) {
                return new Error(error)
            }
        }
    }

    async getNameHistory(uuid) {
        const data = {
            method: 'get',
            url: `https://api.mojang.com/user/profiles/${uuid}/names`
        }

        try {
            const response = await axios(data)
            return response.data
        } catch (error) {
            return new Error(error)
        }
    }

    async getProfile(uuid) {
        const data = {
            method: 'get',
            url: `https://sessionserver.mojang.com/session/minecraft/profile/${uuid}`
        }

        try {
            const response = await axios(data)
            return response.data
        } catch (error) {
            return new Error(error)
        }
    }

    async getTextures(uuid) {
        const data = {
            method: 'get',
            url: `https://sessionserver.mojang.com/session/minecraft/profile/${uuid}`
        }

        try {
            const response = await axios(data)
            return JSON.parse(Buffer.from(response.data.properties[0].value, 'base64').toString())
        } catch (error) {
            return new Error(error)
        }
    }
}

module.exports = {
    McProfile: McProfile
}
