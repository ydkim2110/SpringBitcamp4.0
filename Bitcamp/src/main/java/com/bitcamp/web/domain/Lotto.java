package com.bitcamp.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
public class Lotto {
	private String randomNumber, lottoNumber, money, count;

	@Override
	public String toString() {
		return lottoNumber+"\n";
	}
	
	
}

