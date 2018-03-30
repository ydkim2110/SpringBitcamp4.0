package com.bitcamp.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
public class Food {
	public String foodSeq, menu, price;
}
