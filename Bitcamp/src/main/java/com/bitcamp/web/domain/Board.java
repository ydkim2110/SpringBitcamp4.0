package com.bitcamp.web.domain;

import org.springframework.stereotype.Component;
import lombok.Data;

@Data
@Component
public class Board {
	public String bbsSeq, title, id, regdate, content;
}
