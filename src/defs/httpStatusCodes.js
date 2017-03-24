
const statusCodes = {
    BadRequest: 400,
    Unauthorized: 401,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206
};

export default statusCodes;

export const successStatusCodes = [
    statusCodes.Ok,
    statusCodes.Created,
    statusCodes.Accepted,
    statusCodes.NonAuthoritativeInformation,
    statusCodes.NoContent,
    statusCodes.ResetContent,
    statusCodes.PartialContent
];