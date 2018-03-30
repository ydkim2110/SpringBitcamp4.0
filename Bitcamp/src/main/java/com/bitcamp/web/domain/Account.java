package com.bitcamp.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
public class Account {
	private String accSeq, accNum, money, id;

}
