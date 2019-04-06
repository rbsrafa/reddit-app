
/**
 * Returns an object with a error message
 * @param res 
 */
export function multipleVotesError(voteType: string){
  return {error: `Can not ${voteType}vote multiple times`};
}

/**
 * Returns an object with a not found message
 * @param resource 
 * @param id 
 */
export function resourceNotFoundError(
  resource: string,
  id: number
){
  return {error: `${resource} id ${id} not found`};
}

