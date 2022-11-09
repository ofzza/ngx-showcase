// Worker communication reusable types
// ----------------------------------------------------------------------------

export type WorkerInvocationRequest = { id: number; method: string; args: Record<string, any>; streamPacketSize: number; streamPacketDelay: number };
export type WorkerInvocationResponse = { id: number; success: boolean; result: string; streaming: number[] | false };
