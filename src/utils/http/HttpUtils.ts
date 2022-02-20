import SessionStorage from '../storage/UserStorage'

export interface SuccessResponse<T> {
    data: T
}
export interface ErrorResponse {
    data: { error: string }
}

export enum ApiError {
    UNAUTHORIZED,
    SERVER_ERROR,
    OTHER
}

export interface ErrorDTO {
    type: ApiError
    error: string
}

export default class HttpUtils {

    private static stringifyParameters(parameters: { [key: string]: string } | null): string {
        if (parameters == null) {
            return ''
        }
        let result = ''
        for (let i in parameters) {
            if (result !== '')
                result += '&'
            result += `${i}=${parameters[i]}`
        }
        result = (result === '' ? result : '?' + result)
        return result
    }

    private static createUrl(domain: string | null, endpoint: string, urlParameters: string | null): string {
        if (domain != null && domain.slice(-1) != '/') {
            domain += '/'
        }
        return (domain || '') + endpoint + (urlParameters || '')
    }

    private static handleHttpResult<T>(
        response: Response,
        onSuccess: (data: T) => void,
        onError: (error: ErrorDTO) => void) {
        console.log('[HTTP]', response);
        if (response.redirected || response.status === 302) {
            console.log('[HTTP] redirection');
        }
        if (response.status === 401) {
            console.log('[HTTP] need login');
            onError({
                error: "Unauthorized access.",
                type: ApiError.UNAUTHORIZED
            });
        } else {
            response.text().then(function (text) {
                const status = response.status;
                if (status === 200) {
                    const success: SuccessResponse<T> = JSON.parse(text)
                    onSuccess(success.data);
                } else {
                    const error: ErrorResponse = JSON.parse(text)
                    onError({
                        error: error.data.error,
                        type: ApiError.SERVER_ERROR
                    });
                }
            });
        }
    }

    private static httpURL<T>(
        type: string,
        domain: string | null,
        endpoint: string,
        headers: { [key: string]: string },
        parameters: { [key: string]: string } | null,
        onSuccess: (data: T) => void,
        onError: (error: ErrorDTO) => void) {

        if (SessionStorage.hasSession()) {
            let token = SessionStorage.getSessionToken()
            if (token)
                headers['Authorization'] = token
        }
        let urlParameters: string = this.stringifyParameters(parameters)
        let url: string = this.createUrl(domain, endpoint, urlParameters)
        console.log('[API_' + type + ']: ' + url)

        fetch(url, {
            method: type,
            headers: headers
        }).then(response => {
            this.handleHttpResult(response, onSuccess, onError)
        }).catch(error => {
            console.log('[API][ERROR]-->', error)
            onError({
                error: JSON.stringify(error.error),
                type: ApiError.OTHER
            });
        })
    }

    private static httpData<T>(
        type: string,
        domain: string | null,
        endpoint: string,
        headers: { [key: string]: string },
        data: BodyInit,
        onSuccess: (data: T) => void,
        onError: (error: ErrorDTO) => void) {

        if (SessionStorage.hasSession()) {
            let token = SessionStorage.getSessionToken()
            if (token)
                headers['Authorization'] = token
        }
        let url: string = this.createUrl(domain, endpoint, null)

        console.log('[API_' + type + ']: ' + url)
        fetch(url, {
            method: type,
            headers: headers,
            body: data
        }).then(response => {
            this.handleHttpResult(response, onSuccess, onError)
        }).catch(error => {
            console.log('[API][ERROR]-->', error)
            onError({
                error: error.error,
                type: ApiError.OTHER
            });
        })
    }

    static get<T>(domain: string | null, endpoint: string, parameters: { [key: string]: string } | null, onSuccess: (data: T) => void, onError: (error: ErrorDTO) => void) {
        let headers: { [key: string]: string } = {}
        headers['Access-Control-Allow-Origin'] = '*'
        this.httpURL('GET', domain, endpoint, headers, parameters, onSuccess, onError)
    }

    static post<T>(domain: string | null, endpoint: string, data: {}, onSuccess: (data: T) => void, onError: (error: ErrorDTO) => void) {
        let headers: { [key: string]: string } = {}
        headers['Content-Type'] = 'application/json'
        headers['Accept'] = 'application/json'
        this.httpData('POST', domain, endpoint, headers, JSON.stringify(data), onSuccess, onError)
    }

    static put<T>(domain: string | null, endpoint: string, data: {}, onSuccess: (data: T) => void, onError: (error: ErrorDTO) => void) {
        let headers: { [key: string]: string } = {}
        headers['Content-Type'] = 'application/json'
        headers['Accept'] = 'application/json'
        this.httpData('PUT', domain, endpoint, headers, JSON.stringify(data), onSuccess, onError)
    }

    static delete<T>(domain: string | null, endpoint: string, data: {}, onSuccess: (data: T) => void, onError: (error: ErrorDTO) => void) {
        let headers: { [key: string]: string } = {}
        headers['Content-Type'] = 'application/json'
        headers['Accept'] = 'application/json'
        this.httpData('DELETE', domain, endpoint, headers, JSON.stringify(data), onSuccess, onError)
    }
}