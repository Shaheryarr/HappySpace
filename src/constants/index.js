import NetInfo from '@react-native-community/netinfo';

export const themeStyleSheet = {
    mainColor: '#416AF2',
    secondaryColor: '#c4d9ff',
    white: '#FFFFFF',
    darkGray: '#414143',
    lightgray: 'lightgray',
    red: '#ff1717',
}

export const EMAIL_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const isInternetConnected = () => {
    return new Promise((resolve, reject) => {
        NetInfo.fetch().then(state => {
            if (state.isConnected) {
                console.log("Internet is Connected")
                resolve(state.isConnected);
            } else {
                console.log("Internet is Not Connected")
                reject(state.isConnected)
            }
        }).catch(err => {
            console.log('isInternetConnected Err : ', err);
            reject(err)
        })
    })
}