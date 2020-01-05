//
//  1712.cpp
//  BaekJoon
//
//  Created by 채채 on 05/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    int a, b, c; // a 고정비용 b 가변비용 c 노트북가격
    int bep;
    scanf("%d %d %d", &a, &b, &c);
    if (b >= c) { // 무조건 손해
        printf("-1");
    } else {
        bep = a/(c-b) + 1; // c-b : 가변비용보다 더 버는것이 고정비용을 메꿀만큼 팔아야하고 딱 메꾸면 본전 한대더팔면 그때부터 이득
        printf("%d\n", bep);
    }
    return 0;
}
