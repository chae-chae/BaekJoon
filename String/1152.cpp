//
//  1152.cpp
//  BaekJoon
//
//  Created by 채채 on 04/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <stdio.h>
#include <cstdio>
#include <cstring>
int main(void){
    char sentence[1000001];
    fgets(sentence, 1000002, stdin);
    size_t len = strlen(sentence);
    sentence[len-1] = '\0';
    char *ptr = sentence;
    int cnt = 0;
    while (*ptr != '\0') {
        if ((*ptr >= 'A' && *ptr <= 'Z') || (*ptr >= 'a' && *ptr <= 'z')) {
            ptr++;
            if (*ptr == ' ' || *ptr == '\0') {
                cnt++;
            }
        } else if (*ptr == ' ' ){
            ptr++;
        } else {
            ptr++;
        }
    }
    printf("%d\n", cnt);
    return 0;
}
