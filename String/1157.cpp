//
//  1157.cpp
//  BaekJoon
//
//  Created by 채채 on 03/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    int alpha[26] = {0, };
    char input[1000001];
    scanf("%s", input);
    char *ptr = input;
    while (*ptr != '\0') {
        for (int i = 0; i<26; i++) {
            if (*ptr == 'a'+i || *ptr == 'A'+i) {
                alpha[i]++;
            }
        }
        ptr++;
    }
    int max = alpha[0];
    int equal = -1;
    int index = 0;
    for (int i = 0; i<26; i++) {
        if (alpha[i] > max) {
            max = alpha[i];
            index = i;
            break;
        }
    }
    for (int i = index; i<26; i++) {
        if (alpha[i] == max) {
            index = i;
            equal++;
        } else if (alpha[i] > max){
            max = alpha[i];
            index = i;
            equal = -1;
        }
    }
    if (equal > 0) {
        printf("?\n");
    } else {
        printf("%c\n", 65+index);
    }
    return 0;
}
