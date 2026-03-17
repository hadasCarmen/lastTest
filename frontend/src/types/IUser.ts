export type User = {
    _id?: string
    username: string
    password: string
    email: string
    user_type: "IntelligenceCorpsUser" |
    "AirForceUser" |
    "AdministratorUser"

}