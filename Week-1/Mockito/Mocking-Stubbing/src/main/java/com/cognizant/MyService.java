package com.cognizant;

public class MyService {

    private ExternalAPI externalAPI;

    public MyService(ExternalAPI externalApi) {
        this.externalAPI = externalApi;
    }

    public String fetchData() {
        return externalAPI.getData();
    }
}