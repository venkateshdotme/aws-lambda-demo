exports.handler = async (event) => {     
    const response = {
        statusCode: 200,
        body: JSON.stringify({message: 'Hello from Lambda!'}),
    };
    return response;
};