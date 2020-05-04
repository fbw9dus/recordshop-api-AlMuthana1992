const {env} = process

const devConfig = {
    jwt_key: "ohpkß05zzj5766571kk7?&",
    db:"mongodb://localhost:27017/record-shop"
}
const prodConfig = {
    jwt_key: "d7s6fdsf8787dfafadaf",
    db:"mongodb+srv://<username>:<password>@cluster0-9krc6.mongodb.net/test?retryWrites=true&w=majority"
}


module.exports = env.NODE_ENV === "production" ? prodConfig : devConfig