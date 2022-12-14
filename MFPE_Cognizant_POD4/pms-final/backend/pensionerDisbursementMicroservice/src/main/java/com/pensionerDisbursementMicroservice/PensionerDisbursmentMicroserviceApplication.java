package com.pensionerDisbursementMicroservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EnableFeignClients
@ComponentScan(basePackages = "com.*")
public class PensionerDisbursmentMicroserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(PensionerDisbursmentMicroserviceApplication.class, args);
	}

}
