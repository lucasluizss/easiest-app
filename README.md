# easiest APP

A super simple web project with a RESTful API, and some of the main HTTP standards using [express](https://expressjs.com/).

## [HTTP Verbs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

<table>
  <th>Main</th>
  <th>Others</th>
  <tbody>
    <tr>
      <td>
        <details>
        <summary>GET</summary>
        The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.
        </details>
      </td>
      <td>
        <details>
        <summary>HEAD</summary>
        The HEAD method asks for a response identical to a GET request, but without the response body.
        </details>
      </td>
    </tr>
    <tr>
      <td>
        <details>
        <summary>POST</summary>
        The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server.
        </details>
      </td>
      <td>
        <details>
        <summary>CONNECT</summary>
        The CONNECT method establishes a tunnel to the server identified by the target resource.
        </details>
      </td>
    </tr>
    <tr>
      <td>
        <details>
        <summary>PUT</summary>
        The PUT method replaces all current representations of the target resource with the request payload.
        </details>
      </td>
      <td>
        <details>
        <summary>OPTIONS</summary>
        The OPTIONS method describes the communication options for the target resource.
        </details>
      </td>
    </tr>
    <tr>
      <td>
        <details>
        <summary>DELETE</summary>
        The DELETE method deletes the specified resource.
        </details>
      </td>
      <td>
        <details>
        <summary>TRACE</summary>
        The TRACE method performs a message loop-back test along the path to the target resource.
        </details>
      </td>
    </tr>
    <tr>
      <td>
        <details>
        <summary>PATCH</summary>
        The PATCH method applies partial modifications to a resource.
        </details>
      </td>
    </tr>
  <tbody>
</table>

## Project Type [package.json](./package.json#type)

When set to "module", the type field allows a package to specify all .js files within are ES modules. If the "type" field is omitted or set to "commonjs", all .js files are treated as CommonJS.

## [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

1. Informational responses (100–199)
2. Successful responses (200–299)
	- __200__ Ok
	- __201__ Created
	- __204__ No Content / Request has succeeded
3. Redirection messages (300–399)
4. Client error responses (400–499)
	- __404__ Not found
5. Server error responses (500–599)
	- __500__ Internal server error

## Working with the API using [curl](https://curl.se/)

### GET

```shell
curl --header "Content-Type: application/json" \
  --request GET \
  http://localhost:5000
```

### GET with filtering

```shell
curl --header "Content-Type: application/json" \
  --request GET \
  http://localhost:5000/filter?text=lunch
```

### POST

```shell
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"task":"test0"}' \
  http://localhost:5000/
```

### PUT

```shell
curl --header "Content-Type: application/json" \
  --request PUT \
  --data '{"task":"test0_atualizado"}' \
  http://localhost:5000/0
```

### DELETE

```shell
curl --header "Content-Type: application/json" \
  --request DELETE \
  http://localhost:5000/0
```

### SAVE TASK DONE

```shell
curl --header "Content-Type: application/json" \
  --request POST \
  http://localhost:5000/0/task-done
```

### DELETE TASK DONE

```shell
curl --header "Content-Type: application/json" \
  --request DELETE \
  http://localhost:5000/0/task-done
```