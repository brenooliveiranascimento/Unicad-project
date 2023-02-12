const MIN_CLIENT_CHARACTER = 4;

export const validateClient = (client: string) =>  client.length >= MIN_CLIENT_CHARACTER;

export const validateDate = (date: string) => date.length;

export const validateDestination = (destination: string) => destination.length;

export const validateExit = (destination: string) => destination.length;