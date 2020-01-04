//
//  2941.cpp
//  BaekJoon
//
//  Created by 채채 on 04/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    char word[101];
    scanf("%s", word);
    char *ptr = word;
    int cnt = 0;
    while (*ptr != '\0') {
        if (*ptr == 'c' && *(ptr+1) == '=') {
            cnt++;
            ptr += 2;
        } else if (*ptr == 'c' && *(ptr+1) == '-') {
            cnt++;
            ptr += 2;
        } else if (*ptr == 'd' && *(ptr+1) == 'z' && *(ptr+2) == '=') {
            cnt++;
            ptr += 3;
        } else if (*ptr == 'd' && *(ptr+1) == '-') {
            cnt++;
            ptr += 2;
        } else if (*ptr == 'l' && *(ptr+1) == 'j'){
            cnt++;
            ptr += 2;
        } else if (*ptr == 'n' && *(ptr+1) == 'j'){
            cnt++;
            ptr += 2;
        } else if (*ptr == 's' && *(ptr+1) == '='){
            cnt++;
            ptr += 2;
        } else if (*ptr == 'z' && *(ptr+1) == '='){
            cnt++;
            ptr += 2;
        } else {
            cnt++;
            ptr++;
        }
    }
    printf("%d\n", cnt);
    return 0;
}
