export interface ICalculateResultAction {
  type: string,
  payload: {
    leftValue: string,
    rightValue: string,
    operation: string
  }
}

export interface IDisplayAction {
  type: string,
  payload?: {
    content: string,
    newOperationClicked?: boolean
  }
}

export interface IOperationAction {
  type: string,
  payload?: {
    operation: string
  }
}

export interface IIsOperationClicked {
  type: string
}


export interface IPrevValueAction {
  type: string,
  payload?: {
    value: string
  }
}