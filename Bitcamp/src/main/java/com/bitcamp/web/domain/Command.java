package com.bitcamp.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import lombok.Data;

@Data
@Component
@Lazy
public class Command {
	String data1, data2, id, pass, type;
}
