int Partition(int a[], int left, int right);

void QuickSelect(int a[], int left, int right, int k)
{
	// k 	 --> Passed in; kth smallest element to be chosen
	// left  --> Starting index
	// right --> Ending index
	if (k > 0 && k <= right - left + 1) 
	{
		int pivotIndex = Partition(a, left, right);
		// If position is same as k 
        if (pivotIndex - l == k - 1) 
		{
			// If we wanted to return the k smallest elements we would return 
			// the array comprising of a[0] to a[pivotIndex]
			return a[pivotIndex];
		}            

		// If pivot position is higher than k, recurse left subarray
		if(pivotIndex - left > k-1) { return QuickSelect(a, left, pivotIndex-1, k); }
		// Else recurse right subarray
		// edit k to be relative to subarray
		return QuickSelect(a, pivotIndex+1, right, k-pivotIndex + left - 1);
	}

	// k is larger than the number of elements in the array
	return INT_MAX;
}

// Standard partition process of QuickSort(). 
// It considers the last element as pivot 
// and moves all smaller element to its left and greater elements to its right 
int Partition(int a[], int left, int right)
{ 
	int x = a[right];
	int i = left; 
	for (int j = left; j <= right - 1; j++) 
	{ 
		if (a[j] <= x) 
		{ 
			swap(a[i], a[j]); 
			i++; 
		} 
	} 
	swap(a[i], a[right]); 
	return i; 
}