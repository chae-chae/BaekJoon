//
//  2439.cpp
//  BaekJoon
//
//  Created by 채채 on 19/11/2019.
//  Copyright © 2019 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    int n;
    scanf("%d", &n);
    for (int i = 1; i<=n; i++) {
        if (n-i != 0) {
            printf("%*c", n-i,' ');
        }
        for (int j = 1; j<=i; j++) {
            printf("%c",'*');
        }
        printf("\n");
    }
    return 0;
}
