class Parser1 {
    constructor() {

    }

    evaluate( expression) {
        var evaluationResult= null
        evaluationResult= this.evaluate2( expression, '+', function( a, b){ return a+ b })
        if( !evaluationResult.succeeded&& !evaluationResult.error) {
            evaluationResult= this.evaluate2( expression, '-', function( a, b){ return a- b })
            if( !evaluationResult.succeeded&& !evaluationResult.error) {
                evaluationResult= this.evaluate2( expression, '*', function( a, b){ return a* b })
                if( !evaluationResult.succeeded&& !evaluationResult.error) {
                    evaluationResult= this.evaluate2( expression, '/', function( a, b){ return a/ b })
                    if( !evaluationResult.succeeded&& !evaluationResult.error) {
                        evaluationResult.result= Number(expression)
                        if( evaluationResult.result== NaN) {
                            evaluationResult.error= true
                        }
                        else {
                            evaluationResult.succeeded= true
                        }
                    }
                }
            }
        }
        return evaluationResult
    }

    evaluate2( expression, operator, operation) {
        var ret= new EvaluationResult()
        var index= expression.lastIndexOf( operator)
        if( index> -1) {
            var leftExpression= expression.slice( 0, index)
            var rightExpression= expression.slice( index+ 1)
            var leftResult= this.evaluate( leftExpression)
            var rightResult= this.evaluate( rightExpression)
            if( leftResult.succeeded&& rightResult.succeeded) {
                ret.result= operation( leftResult.result, rightResult.result)
                ret.succeeded= true
            }
            else {
                if( leftResult.error|| rightResult.error) {
                    ret.error= true
                }
            }
        }
        return ret
    }
}